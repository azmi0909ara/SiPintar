import { Indonesia1Metadata } from './Indonesia1';
import { Pancasila1Metadata } from './Pancasila1';
import { Inggris1Metadata } from './Inggris1';
import { Indonesia2Metadata } from './Indonesia2';
import { Pancasila2Metadata } from './Pancasila2';
import { Inggris2Metadata } from './Inggris2';
import { Indonesia3Metadata } from './Indonesia3';
import { Pancasila3Metadata } from './Pancasila3';
import { Inggris3Metadata } from './Inggris3';


export interface SimpleTopic {
  title: string;
}

export interface OverlayContentItem {
  title: string;
  icon: any;
  detailTitle: string;
  detailDescription: string;
  topics?: SimpleTopic[];
}

export interface CardDataItem {
  title: string;
  subtitle: string;
  className: string;
  curriculum: string;
  overlayTitle: string;
  overlayContent: OverlayContentItem[];
}

export const cardData: CardDataItem[] = [
  Indonesia1Metadata as CardDataItem,
  Pancasila1Metadata as CardDataItem,
  Inggris1Metadata as CardDataItem,
  Indonesia2Metadata as CardDataItem,
  Pancasila2Metadata as CardDataItem,
  Inggris2Metadata as CardDataItem,
  Indonesia3Metadata as CardDataItem,
  Pancasila3Metadata as CardDataItem,
  Inggris3Metadata as CardDataItem,
];