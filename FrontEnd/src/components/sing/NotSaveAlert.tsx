import styles from "@styles/sing/SaveAlert.module.scss";
import logo from "public/image/logo.png";
import { useNavigate } from "react-router-dom";

type PropType = {
  setShowNoAlert: React.Dispatch<React.SetStateAction<boolean>>;

} 

const NotSaveAlert = (props:PropType) => {
  const {setShowNoAlert} = props
  const navigate = useNavigate();
  const save = () => {
    console.log("메인");
    setShowNoAlert(false)

  };
  const singAgain = () => {
    setShowNoAlert(false)
  };

  const goMain = () => {
    navigate("/mainchart");
  };
  return (
    <div>
      <div className={styles.buttonwrapper}>
        <div className={styles.guide}>
          <img src={logo} alt="logo" />
          <h4>1분 이상의 레코딩만 저장됩니다.</h4>
        </div>
        <button onClick={save}>이어부르기</button>
        <button onClick={singAgain}>다시 부르기</button>
        <button onClick={goMain}>그냥 끝내기</button>
      </div>
    </div>
  );
};

export default NotSaveAlert;