import { useUserName } from "../context/UserContext";

const Branding = () => {
  const userName = useUserName();

  return (
    <a
      href="/"
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
    >
      <svg className="bi me-2" width="40" height="32">
        <use xlinkHref="#bootstrap"></use>
      </svg>
      <span className="fs-4">
        {userName}'s Coffee House</span>
    </a>
  );
};

export default Branding;
