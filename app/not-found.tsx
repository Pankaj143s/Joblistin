export default function NotFound() {
  return (
    <main className="min-h-[70vh] grid place-items-center bg-background text-foreground px-6 py-24">
      <div className="text-center space-y-6 max-w-xl">
        <p className="text-sm font-medium text-muted-foreground tracking-wider">ERROR 404</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">Page not found</h1>
        <p className="text-muted-foreground">
          The page you’re looking for doesn’t exist or was moved. Check the URL, or head back to the homepage.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Go Home
          </a>
          <a
            href="/contact"
            className="inline-flex items-center rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}
