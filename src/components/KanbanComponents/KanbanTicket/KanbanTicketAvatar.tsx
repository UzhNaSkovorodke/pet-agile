import * as React from 'react';

import icon1 from '../../../assets/icon/user1.png';

interface IKanbanTicketAvatarProps {}

const KanbanTicketAvatar: React.FunctionComponent<IKanbanTicketAvatarProps> = props => {
  return (
    <div className="ticket__avatarWrapper">
      <img draggable={false} src={icon1} className="ticket__avatar ticket__" />
      <p>Кирилл Дженкинс</p>
    </div>
  );
};

export default KanbanTicketAvatar;
