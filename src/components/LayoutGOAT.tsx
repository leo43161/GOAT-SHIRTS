import Header from '@/components/Header';
import Cart from '@/components/Cart';
import FloatingCTA from '@/components/FloatingCTA';

export default function LayoutGOAT({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <Cart />
            <main>{children}</main>
            <FloatingCTA />
        </>
    );
}