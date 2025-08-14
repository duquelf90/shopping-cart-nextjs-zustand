"use client";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  onCartIconClick: () => void;
}

const CartDrawer = ({ children, isOpen, onCartIconClick }: Props) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onCartIconClick}
        className={`fixed inset-0 bg-black/50 z-20 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

	  {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-80 z-30 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
			boxShadow: 'rgba(0, 0, 0, 0.4) 0px 30px 30px',
		  }}
        >
          <aside className="h-full overflow-y-auto bg-white shadow-xl">
            <header className="bg-gray-900 text-white py-4 flex items-center justify-end px-4 h-14">
                <div onClick={onCartIconClick} className="hover:opacity-80">Close</div>
            </header>
            <main className="p-4 text-black">{children}</main>
          </aside>
        </div>
    </>
  );
};

export default CartDrawer;
