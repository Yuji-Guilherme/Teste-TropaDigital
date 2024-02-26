import { useState } from 'react';
import Image from 'next/image';

import * as S from '../style';

function Notification() {
  const [openNotification, setNotification] = useState(false);

  return (
    <S.NotificationWrapper>
      <button onClick={() => setNotification((prev) => !prev)}>
        <Image
          src="/icon/dashboard/notification.svg"
          alt="ícone de um sino"
          width={30}
          height={30}
          className={S.notificationIconClassName}
        />
      </button>
      {openNotification && (
        <S.NotificationArea>
          <S.NotificationText>Notifications</S.NotificationText>
        </S.NotificationArea>
      )}
    </S.NotificationWrapper>
  );
}

export { Notification };
