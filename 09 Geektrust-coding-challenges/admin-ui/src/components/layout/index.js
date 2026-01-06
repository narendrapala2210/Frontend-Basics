import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

const Layout = (props) => {
  const { profileDetails, onDeleteDataList } = props;
  const { id, name, email, role } = profileDetails;

  const deleteUser = () => {
    onDeleteDataList(id);
  };

  return (
    <li className="layout">
      <div className="start-layout-checkbox">
        <input type="checkbox" />
      </div>
      <p className="start-layout-name">{name}</p>
      <p className="start-layout-email">{email}</p>
      <p className="start-layout-role">{role}</p>
      <div className="action-tab start-layout-action">
        <button className="action-btn" type="button">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button onClick={deleteUser} className="action-btn" type="button">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Layout;
