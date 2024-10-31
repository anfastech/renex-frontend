// SearchPage - layout.tsx
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const SearchPageLayout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            {children}
        </div>
    );
};

export default SearchPageLayout;
