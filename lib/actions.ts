'use server';

import { createClient } from '@supabase/supabase-js';

function getSupabase() {
    const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const rawKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

    const url = rawUrl.trim().replace(/^['"]|['"]$/g, '');
    const key = rawKey.trim().replace(/^['"]|['"]$/g, '');

    return createClient(url, key, {
        auth: { persistSession: false }
    });
}

/**
 * Retorna todos os PINs configurados (somente slugs e pins).
 * Esta função só é chamada dentro do AdminPanel (protegido por senha).
 */
export async function getAllPinsAction(): Promise<Record<string, string>> {
    const supabase = getSupabase();
    const { data, error } = await supabase
        .from('propostas_pins')
        .select('slug, pin');

    if (error) {
        console.error('Erro ao buscar PINs:', error);
        return {};
    }

    const pinMap: Record<string, string> = {};
    if (data) {
        data.forEach(row => {
            pinMap[row.slug] = row.pin;
        });
    }

    return pinMap;
}

/**
 * Cria ou atualiza o PIN de uma proposta específica.
 */
export async function setPinAction(slug: string, pin: string): Promise<{ success: boolean; error?: string }> {
    try {
        const rawKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
        const trimmedKey = rawKey.trim().replace(/^['"]|['"]$/g, '');

        // Debug mode para a Vercel
        const isJwt = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/.test(trimmedKey);

        if (!isJwt) {
            return {
                success: false,
                error: `Chave Inválida. Tamanho Real: ${rawKey.length}. Tamanho Trimmed: ${trimmedKey.length}. Final da chave lida: ${trimmedKey.slice(-10)}. Verifique se você não copiou espaços ou partes faltantes na Vercel.`
            };
        }

        const supabaseClient = getSupabase();

        const { error } = await supabaseClient
            .from('propostas_pins')
            .upsert({ slug, pin }, { onConflict: 'slug' });

        if (error) {
            console.error('Erro ao salvar PIN:', error);
            return { success: false, error: error.message };
        }
        return { success: true };
    } catch (err: any) {
        console.error('Exception capturada no setPinAction:', err);
        return { success: false, error: err?.message || String(err) };
    }
}

/**
 * Remove o PIN de uma proposta, bloqueando o acesso à mesma.
 */
export async function deletePinAction(slug: string): Promise<boolean> {
    const supabaseClient = getSupabase();
    const { error } = await supabaseClient
        .from('propostas_pins')
        .delete()
        .eq('slug', slug);

    if (error) {
        console.error('Erro ao deletar PIN:', error);
        return false;
    }
    return true;
}

/**
 * Verifica se uma proposta possui PIN cadastrado no banco.
 * Segurança: Não retorna qual é o PIN, apenas um booleano.
 */
export async function checkHasPinAction(slug: string): Promise<boolean> {
    const supabaseClient = getSupabase();
    const { count, error } = await supabaseClient
        .from('propostas_pins')
        .select('slug', { count: 'exact', head: true })
        .eq('slug', slug);

    if (error) {
        console.error('Erro ao checar existência de PIN:', error);
        return false;
    }

    return count !== null && count > 0;
}

/**
 * Verifica se a tentativa de PIN enviada confere com o banco de dados.
 * Segurança: Compara diretamente no banco. Nunca trazemos o PIN para a RAM ou Frontend
 * para validação se não for necessário. Aqui, por simplicidade, comparamos via igualdade.
 */
export async function validatePinAction(slug: string, attemptedPin: string): Promise<boolean> {
    const supabaseClient = getSupabase();
    const { data, error } = await supabaseClient
        .from('propostas_pins')
        .select('pin')
        .eq('slug', slug)
        .single();

    if (error || !data) {
        return false;
    }

    return data.pin === attemptedPin;
}
