// import Header from "@/components/Header";
// import "../styles/globals.css";


// export default function HomeLayout({children}){
//   return (
//       <div>
//         <Header />
//         {children}
//       </div>
//   );
// }
// src/app/HomePage/layout.tsx

export default function HomePageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* Any shared layout like headers, sidebars, etc. */}
            {children}
        </div>
    );
}
