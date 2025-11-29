import PageWrapper from "../components/layout/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <h2 className="text-3xl font-semibold text-white mb-3">Bienvenido</h2>
      <p className="text-gray-400">
        Administra categorías y productos desde este dashboard minimalista.
      </p>
    </PageWrapper>
  );
}
