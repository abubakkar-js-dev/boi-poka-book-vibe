import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div className="flex min-h-svh bg-slate-200 text-purple-400 items-center justify-center">
      <Helmet>
        <title>Not Found | Book vibes</title>
      </Helmet>
      <h2 className="text-3xl ">Opps! The page is not found</h2>
    </div>
  );
};

export default ErrorPage;
