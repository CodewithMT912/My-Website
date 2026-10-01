export default function ProjectDetailPage({ params }) {
  return (
    <main style={{ padding: "120px 7% 80px", color: "#fff" }}>
      <h1>Project Details</h1>
      <p>Project slug: {params?.slug}</p>
    </main>
  );
}
