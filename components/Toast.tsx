import "@/styles/components/toast.scss";

import { Cross1Icon } from "@radix-ui/react-icons";
import { Status } from "@/utils/authProtocols";

export default function Toast({ visible, message, status }: { visible?: boolean, message?: string, status?: Status }) {
  return (
    <>
      {
        visible ? (
          <div className="toast">
            <div className="toast__header">
              {status}
              <button className="close-btn"><Cross1Icon /></button>
            </div>
            <div className="toast__message">
              <p>{message}</p>
            </div>
          </div>
        ) : ""
      }
    </>
  );
}
