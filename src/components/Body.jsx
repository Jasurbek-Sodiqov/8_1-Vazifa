import Apx from "./Apx";
import Frame from "./Frame";
import Royhat from "./List";
import Sms from "./Messege";

function Body() {
  return (
    <div className="Body">
      <div>
        <Frame />
        <Apx />
        <div className="tebl">
          <div className="tebl_div">
            <h2 className="tg">#Taglar</h2>
            <div>
              <h3 className="ta120">120 ta</h3>
              <p className="umumiy">umumiy #tag lar soni</p>
            </div>
          </div>
          <Royhat />
        </div>
      </div>

      <div>
        <Sms />
        <div className="feedback">
          <img src="./Group 45.svg" alt="" />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <h3 className="ta120">234 ta</h3>
              <p className="umumiy">bu oygi feedbacklar</p>
            </div>
            <p className="feed15">
              15%{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="rgba(252, 90, 90, 1)"
              >
                <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
              </svg>
            </p>
          </div>
        </div>

        <div className="integratsiya">
          <h2 className="integratsiya_h2">Integratsiyalar</h2>

          <div className="medya">
            <div className="medya_div">
              <img src="./PP.svg" width={42} alt="" />
              <div>
                <h3 className="nom">AmoCrm</h3>
                <h4 className="crm">CRM</h4>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
            </svg>
          </div>

          <div className="medya">
            <div className="medya_div">
              <img src="./PP (1).svg" width={42} alt="" />
              <div>
                <h3 className="nom">TelegramBot</h3>
                <h4 className="crm">Habar yuboruvchi</h4>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
            </svg>
          </div>

          <div className="medya">
            <div className="medya_div">
              <img src="./PP (2).svg" width={42} alt="" />
              <div>
                <h3 className="nom">Trello</h3>
                <h4 className="crm">Task Management</h4>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
            </svg>
          </div>

          <div className="medya">
            <div className="medya_div">
              <img src="./PP (3).svg" width={42} alt="" />
              <div>
                <h3 className="nom">Bitrix</h3>
                <h4 className="crm">CRM</h4>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
            </svg>
          </div>

          <div className="medya">
            <div className="medya_div">
              <img src="./PP (4).svg" width={42} alt="" />
              <div>
                <h3 className="nom">IP Phone</h3>
                <h4 className="crm">Phone</h4>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
            </svg>
          </div>

          <h2 className="ohirgi">Barcha integratsiyalar</h2>
        </div>
      </div>
    </div>
  );
}

export default Body;
