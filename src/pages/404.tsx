import * as React from "react"
import { Link } from "gatsby"
import LogoImg from "../images/logo.png";
import '../styles/index.scss'

// styles
const pageStyles = {
  padding: "96px",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>404 Not found</title>
      <h1 style={headingStyles}>Ops pagina non trovata</h1>
      <p style={paragraphStyles}>
        Mi dispiace{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        non abbiamo trovato la pagina che stavi cercando
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <br />
        <Link to="/">
          Torna a Pool Landscape
          <br />
          <br />
          <img src={LogoImg} alt="Logo" width={131} height={80} />
        </Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
