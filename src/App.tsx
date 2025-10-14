import { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Theme } from './settings/types';
import { OverlaysUnoLandingPage } from './components/generated/OverlaysUnoLandingPage';
import ContactPage from './components/generated/ContactPage';
import { OverlaysLibraryGridPage } from './components/generated/LibraryPage';
import CheckoutDemo from './pages/CheckoutDemo';
import { AuthProvider } from './contexts/AuthContext';

let theme: Theme = 'dark';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const generatedComponent = useMemo(() => {
    // THIS IS WHERE THE TOP LEVEL GENRATED COMPONENT WILL BE RETURNED!
    return <OverlaysUnoLandingPage />; // %EXPORT_STATEMENT%
  }, []);

  const content = (
    <AuthProvider>
      <Routes>
        <Route path="/" element={generatedComponent} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/library" element={<OverlaysLibraryGridPage key="library" />} />
        <Route
          path="/tools"
          element={<OverlaysLibraryGridPage key="tools" initialView="Tools" />}
        />
        <Route
          path="/mytools"
          element={<OverlaysLibraryGridPage key="mytools" initialView="MyTools" />}
        />
        <Route
          path="/mytools/*"
          element={<OverlaysLibraryGridPage key="mytools-tool" initialView="MyTools" />}
        />
        <Route
          path="/account"
          element={<OverlaysLibraryGridPage key="account" initialView="Account" />}
        />
        <Route
          path="/pricing"
          element={<OverlaysLibraryGridPage key="pricing" initialView="Pricing" />}
        />
        <Route path="/checkout" element={<CheckoutDemo />} />
      </Routes>
    </AuthProvider>
  );

  if (container === 'centered') {
    return <div className="h-full w-full flex flex-col items-center justify-center">{content}</div>;
  } else {
    return content;
  }
}

export default App;
