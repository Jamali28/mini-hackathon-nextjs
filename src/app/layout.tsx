import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
