import BasicExample from "./navbar";
import Profile from "./profile";

export const metadata = {
  title: 'Ajloria',
  description: 'Profile Website',
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body><BasicExample/><Profile/>{children}</body>
    </html>
  );
}