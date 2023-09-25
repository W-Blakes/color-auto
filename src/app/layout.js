import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';
import Header from './components/Header';

//style
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Dream Whip Buildr',
  description: 'Customize your classic car paint, upholstery, wheels and more',
  keywords:
    'classic, muscle car, old-school, hotrod, vintage, antique, builder, digital paint, 3d car model, custom car ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={poppins.className}>
        <Sidebar />
        <main>
          <Header />
          {children}
        </main>
        <OnlineUsers />
      </body>
    </html>
  );
}
