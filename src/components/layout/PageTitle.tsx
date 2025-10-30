interface PageTitleProps {
  children: React.ReactNode;
}

const PageTitle = ({ children }: PageTitleProps) => {
  return (
    <div className="bg-secondary text-secondary-foreground rounded-lg px-6 py-3 mb-8 text-center shadow-md w-[300px] mx-auto">
      <h2 className="text-xl font-bold">{children}</h2>
    </div>
  );
};

export default PageTitle;
