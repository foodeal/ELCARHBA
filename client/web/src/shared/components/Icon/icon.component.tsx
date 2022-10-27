import React from 'react';
import { Icon as MaterialIcon } from '@mui/material';

import { IMap } from '@core/utils/map-utils';
import { IconData } from '../../interfaces';

import { Content } from './elcarhba-icons/Content';
import { Fire } from './elcarhba-icons/Fire';
import { Firewall } from './elcarhba-icons/Firewall';
import { Flame } from './elcarhba-icons/Flame';
import { Flash } from './elcarhba-icons/Flash';
import { Fuel } from './elcarhba-icons/Fuel';
import { GasStorage } from './elcarhba-icons/GasStorage';
import { Joist } from './elcarhba-icons/Joist';
import { Joist2 } from './elcarhba-icons/Joist2';
import { Logs } from './elcarhba-icons/Logs';
import { Oil } from './elcarhba-icons/Oil';
import { Roof } from './elcarhba-icons/Roof';
import { Roof21 } from './elcarhba-icons/Roof21';
import { Tiles } from './elcarhba-icons/Tiles';
import { Ventilation } from './elcarhba-icons/Ventilation';
import { Wood2 } from './elcarhba-icons/Wood2';
import { Chaleur } from './elcarhba-icons/Chaleur';
import { Fan } from './elcarhba-icons/Fan';
import { Circle } from './elcarhba-icons/Circle';
import { Calendar } from './elcarhba-icons/Calendar';
import { Stroke1 } from './elcarhba-icons/Stroke1';
import { Profile } from './elcarhba-icons/Profile';
import { BurgerMenu } from './elcarhba-icons/BurgerMenu';
import { Show } from './elcarhba-icons/Show';
import { Hide } from './elcarhba-icons/Hide';
import { Shield } from './elcarhba-icons/Shield';
import { Location } from './elcarhba-icons/Location';
import { InfoCircle } from './elcarhba-icons/InfoCircle';
import { RoundCheck } from './elcarhba-icons/RoundCheck';
import { Chat } from './elcarhba-icons/Chat';
import { Logout } from './elcarhba-icons/Logout';
import { BookMark } from './elcarhba-icons/Bookmark';
import { Wallet } from './elcarhba-icons/Wallet';
import { Pencil } from './elcarhba-icons/Pencil';
import { RoundedProfile } from './elcarhba-icons/RoundedProfile';
import { LeftArrow } from './elcarhba-icons/LeftArrow';
import { DownArrow } from './elcarhba-icons/DownArrow';
import { UpArrow } from './elcarhba-icons/UpArrow';
import { Home } from './elcarhba-icons/Home';
import { Graph } from './elcarhba-icons/Graph';
import { Close } from './elcarhba-icons/Close';
import { Group } from './elcarhba-icons/Group';
import { Paper } from './elcarhba-icons/Paper';
import { Filter } from './elcarhba-icons/Filter';
import { QuestionMark } from './elcarhba-icons/QuestionMark';
import { MoreSquare } from './elcarhba-icons/MoreSquare';
import { PaperPlus } from './elcarhba-icons/PaperPlus';
import { Upload } from './elcarhba-icons/Upload';
import { Download } from './elcarhba-icons/Download';
import { Activity } from './elcarhba-icons/Activity';
import { Document } from './elcarhba-icons/Document';
import { TimeCircle } from './elcarhba-icons/TimeCircle';
import { Help } from './elcarhba-icons/help';
import { Square } from './elcarhba-icons/square';
import { Lock } from './elcarhba-icons/Lock';
import { MissedCall } from './elcarhba-icons/MissedCall';
import { Video } from './elcarhba-icons/Video';
import { Send } from './elcarhba-icons/Send';
import { Calling } from './elcarhba-icons/Calling';
import { Chart } from './elcarhba-icons/Chart';
import { Folder } from './elcarhba-icons/Folder';

declare type ElcarhbaIconName =
  | 'activity'
  | 'square'
  | 'help'
  | 'document'
  | 'content'
  | 'close'
  | 'group'
  | 'fire'
  | 'firewall'
  | 'flame'
  | 'flash'
  | 'fuel'
  | 'gas-storage'
  | 'joist'
  | 'joist-2'
  | 'logs'
  | 'oil'
  | 'roof'
  | 'roof-2-1'
  | 'tiles'
  | 'vector'
  | 'ventilation'
  | 'wood-2'
  | 'fan'
  | 'chaleur'
  | 'calendar'
  | 'stroke-1'
  | 'profile'
  | 'rounded-profile'
  | 'circle'
  | 'show'
  | 'hide'
  | 'shield'
  | 'location'
  | 'info-circle'
  | 'round-check'
  | 'book-mark'
  | 'chat'
  | 'logout'
  | 'wallet'
  | 'pencil'
  | 'paper'
  | 'paper-plus'
  | 'left-arrow'
  | 'up-arrow'
  | 'down-arrow'
  | 'home'
  | 'graph'
  | 'filter'
  | 'download'
  | 'upload'
  | 'question-mark'
  | 'more-square'
  | 'time-circle'
  | 'lock'
  | 'missed-call'
  | 'video'
  | 'send'
  | 'calling'
  | 'chart'
  | 'folder'
  | 'menu';

interface IconProps {
  onClick?(): void;
}

export function Icon(props: IconData & IconProps): JSX.Element {
  const iconMap = new IMap<ElcarhbaIconName, JSX.Element>([
    ['activity', <Activity {...props} key="activity"/>],
    ['square', <Square {...props} key="square"/>],
    ['help', <Help {...props} key="help"/>],
    ['document', <Document {...props} key="document"/>],
    ['video', <Video {...props} key="video"/>],
    ['content', <Content color="red" {...props} key="content"/>],
    ['close', <Close color="white" {...props} key="close"/>],
    ['group', <Group {...props} key="group"/>],
    ['fire', <Fire {...props} key="fire"/>],
    ['firewall', <Firewall {...props} key="firewall"/>],
    ['flame', <Flame {...props} key="flame"/>],
    ['flash', <Flash {...props} key="flash"/>],
    ['fuel', <Fuel {...props} key="fuel"/>],
    ['gas-storage', <GasStorage {...props} key="gas-storage"/>],
    ['joist', <Joist {...props} key="joist"/>],
    ['joist-2', <Joist2 {...props} key="joist-2"/>],
    ['logs', <Logs {...props} key="logs"/>],
    ['oil', <Oil {...props} key="oil"/>],
    ['roof', <Roof {...props} key="roof"/>],
    ['roof-2-1', <Roof21 {...props} key="roof-2-1"/>],
    ['tiles', <Tiles {...props} key="tiles"/>],
    ['ventilation', <Ventilation {...props} key="ventilation"/>],
    ['wood-2', <Wood2 {...props} key="wood-2"/>],
    ['fan', <Fan {...props} key="fan"/>],
    ['chaleur', <Chaleur {...props} key="chaleur"/>],
    ['circle', <Circle {...props} key=""/>],
    ['calendar', <Calendar {...props} key=""/>],
    ['stroke-1', <Stroke1 {...props} key=""/>],
    ['profile', <Profile {...props} key=""/>],
    ['rounded-profile', <RoundedProfile {...props} key=""/>],
    ['show', <Show {...props} key=""/>],
    ['hide', <Hide {...props} key=""/>],
    ['info-circle', <InfoCircle {...props} key=""/>],
    ['menu', <BurgerMenu {...props} key=""/>],
    ['location', <Location {...props} key=""/>],
    ['shield', <Shield {...props} key=""/>],
    ['book-mark', <BookMark {...props} key=""/>],
    ['chat', <Chat {...props} key=""/>],
    ['logout', <Logout {...props} key=""/>],
    ['round-check', <RoundCheck {...props} key=""/>],
    ['wallet', <Wallet {...props} key=""/>],
    ['pencil', <Pencil {...props} key=""/>],
    ['left-arrow', <LeftArrow {...props} key=""/>],
    ['up-arrow', <UpArrow {...props} key=""/>],
    ['down-arrow', <DownArrow {...props} key=""/>],
    ['home', <Home {...props} key=""/>],
    ['download', <Download {...props} key=""/>],
    ['upload', <Upload {...props} key=""/>],
    ['graph', <Graph {...props} key=""/>],
    ['paper', <Paper {...props} key=""/>],
    ['paper-plus', <PaperPlus {...props} key=""/>],
    ['filter', <Filter {...props} key=""/>],
    ['question-mark', <QuestionMark {...props} key=""/>],
    ['more-square', <MoreSquare {...props} key=""/>],
    ['time-circle', <TimeCircle {...props} key=""/>],
    ['lock', <Lock {...props} key=""/>],
    ['missed-call', <MissedCall {...props} key=""/>],
    ['video', <Video {...props} key=""/>],
    ['send', <Send {...props} key=""/>],
    ['calling', <Calling {...props} key=""/>],
    ['chart', <Chart {...props} key=""/>],
    ['folder', <Folder {...props} key=""/>],
  ]);

  switch (props.prefix) {
    case 'material':
      return (
        <MaterialIcon
          className={props.className}
          fontSize={props.fontSize}
          color={props.type}
          style={{ ...props.style, color: props.color }}
          sx={props.sx}
          onClick={props.onClick}
        >
          {props.name}
        </MaterialIcon>
      );

    case 'elcarhba':
      return iconMap.getValue(props.name as ElcarhbaIconName) || <></>;

    default:
      return <></>;
  }
}
