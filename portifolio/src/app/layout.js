import "./globals.css";
import Menu from "../componentes/menu";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pr-br">
      <body >
        <Menu />
        {children}
      </body>
    </html>
  );
}
