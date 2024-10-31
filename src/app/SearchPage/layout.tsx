// SearchPage - layout.tsx
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const SearchPageLayout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col w-full lg:w-1/2">
            {children}
        </div>
    );
};

export default SearchPageLayout;
