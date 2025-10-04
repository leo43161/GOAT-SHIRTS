import Header from '@/components/Header';
import Cart from '@/components/Cart';
import FloatingCTA from '@/components/FloatingCTA';
import StickyCartReminder from './StickyCartReminder';

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
            {/* <StickyCartReminder /> */}
        </>
    );
}