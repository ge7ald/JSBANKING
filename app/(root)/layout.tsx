

import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Gerald", lastName: "js" };

  return (
    <main className="flex h-screen w-full font-semibold">
      <Sidebar user={loggedIn} />

      {children}
    </main>
  );
}
