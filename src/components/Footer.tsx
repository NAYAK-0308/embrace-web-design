const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg gradient-hero flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-xs">A</span>
          </div>
          <span className="font-display font-bold text-foreground">Anchor</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2025 Tip Top Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
