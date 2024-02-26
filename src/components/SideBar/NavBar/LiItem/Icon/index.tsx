import type { SVGAttributes, CSSProperties } from 'react';
import { DashBoardIcon } from './Dashboard';
import { DocumentIcon } from './Document';
import { DupleChatIcon } from './DupleChat';
import { NewFileIcon } from './NewFile';
import { CircleUserIcon } from './CircleUser';

import * as S from './style';

type SideBarIconsProps = {
  svgClassName: string;
  pathClassName: string;
  pathStyle: CSSProperties;
} & SVGAttributes<SVGElement>;

type SideBarIconType =
  | 'dashboard'
  | 'document'
  | 'dupleChat'
  | 'newFile'
  | 'circleUser';

type SideBarIconComponentProps = {
  type: SideBarIconType;
  isActive: boolean;
};

function SideBarIcon({ type, isActive }: SideBarIconComponentProps) {
  const components: Record<SideBarIconType, JSX.Element> = {
    dashboard: (
      <DashBoardIcon
        svgClassName={S.svgIconClassName}
        pathClassName={S.pathIconClassName}
        pathStyle={S.pathStyleFn(isActive)}
      />
    ),
    document: (
      <DocumentIcon
        svgClassName={S.svgIconClassName}
        pathClassName={S.pathIconClassName}
        pathStyle={S.pathStyleFn(isActive)}
      />
    ),
    dupleChat: (
      <DupleChatIcon
        svgClassName={S.svgIconClassName}
        pathClassName={S.pathIconClassName}
        circleClassName={S.circleIconClassName}
        circleStyle={S.circleStyleFn(isActive)}
        pathStyle={S.pathStyleFn(isActive)}
      />
    ),
    newFile: (
      <NewFileIcon
        svgClassName={S.svgIconClassName}
        pathClassName={S.pathIconClassName}
        pathStyle={S.pathStyleFn(isActive)}
      />
    ),
    circleUser: (
      <CircleUserIcon
        svgClassName={S.svgIconClassName}
        pathClassName={S.pathIconClassName}
        pathStyle={S.pathStyleFn(isActive)}
      />
    )
  };

  return components[type] || null;
}

export { SideBarIcon };
export type { SideBarIconsProps, SideBarIconType };
