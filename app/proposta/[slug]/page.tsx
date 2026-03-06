import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProposta, getAllPropostas } from '@/lib/propostas';
import PropostaNavbar from '@/components/proposta/PropostaNavbar';
import PropostaPinGate from '@/components/proposta/PropostaPinGate';
import PropostaHero from '@/components/proposta/PropostaHero';
import PropostaSistema from '@/components/proposta/PropostaSistema';
import PropostaPlanos from '@/components/proposta/PropostaPlanos';
import PropostaComparativo from '@/components/proposta/PropostaComparativo';
import PropostaObservacoes from '@/components/proposta/PropostaObservacoes';
import PropostaPassos from '@/components/proposta/PropostaPassos';
import PropostaFooter from '@/components/proposta/PropostaFooter';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const propostas = getAllPropostas();
    return propostas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const proposta = getProposta(slug);
    if (!proposta) return { title: 'Proposta não encontrada — TKode Labs' };

    return {
        title: `${proposta.servico} — TKode Labs`,
        description: proposta.descricao,
        robots: { index: false, follow: false },
    };
}

export default async function PropostaPage({ params }: Props) {
    const { slug } = await params;
    const proposta = getProposta(slug);

    if (!proposta) {
        notFound();
    }

    const conteudo = (
        <>
            <PropostaNavbar sistema={Boolean(proposta.sistema)} contatoId="proposta-contato" cores={proposta.cores} />
            <main>
                <PropostaHero proposta={proposta} />
                <hr className="fancy-divider" />
                {proposta.sistema && (
                    <>
                        <PropostaSistema proposta={proposta} />
                        <hr className="fancy-divider" />
                    </>
                )}
                <PropostaPlanos proposta={proposta} />
                <hr className="fancy-divider" />
                <PropostaComparativo proposta={proposta} />
                {proposta.observacoes && <PropostaObservacoes proposta={proposta} />}
                <PropostaPassos proposta={proposta} />
                <PropostaFooter proposta={proposta} />
            </main>
        </>
    );

    return (
        <PropostaPinGate
            slug={proposta.slug}
            cliente={proposta.cliente}
            cores={proposta.cores}
        >
            {conteudo}
        </PropostaPinGate>
    );
}
