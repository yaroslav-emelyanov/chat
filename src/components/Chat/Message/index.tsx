import React from 'react';
import clsx from 'clsx';
import { Avatar } from '@material-ui/core';

import { useStyles } from './styles';

interface IMessageProps {
  message: any;
  isCurrentUser: boolean;
}

const Message: React.FC<IMessageProps> = ({ isCurrentUser }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.message, {
        [classes.currentUser]: isCurrentUser,
      })}
    >
      {!isCurrentUser && (
        <Avatar alt={`Avatar n°1`} src={`/static/images/avatar/.jpg`} />
      )}
      <div className={classes.bubble}>
        <div>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века. В то время некий безымянный печатник
          создал большую коллекцию размеров и форм шрифтов, используя Lorem
          Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
          без заметных изменений пять веков, но и перешагнул в электронный
          дизайн. Его популяризации в новое время послужили публикация листов
          Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
          время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
          которых используется Lorem Ipsum.
        </div>
        <div>time</div>
      </div>
    </div>
  );
};

export default Message;
