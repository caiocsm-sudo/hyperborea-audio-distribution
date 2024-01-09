import "@/styles/auth-layout.scss";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="wrapper">
      <div className="wrapper__form">
        {children}
      </div>
    </section>
  )
}
