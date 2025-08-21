import { Indonesia1Metadata } from './Indonesia1';
import { Pancasila1Metadata } from './Pancasila1';
import { Inggris1Metadata } from './Inggris1';
import { Indonesia2Metadata } from './Indonesia2';
import { Pancasila2Metadata } from './Pancasila2';
import { Inggris2Metadata } from './Inggris2';
import { Indonesia3Metadata } from './Indonesia3';
import { Pancasila3Metadata } from './Pancasila3';
import { Inggris3Metadata } from './Inggris3';
import { Indonesia4Metadata } from './Indonesia4';
import { Pancasila4Metadata } from './Pancasila4';
import { Inggris4Metadata } from './Inggris4';
import { Indonesia5Metadata } from './Indonesia5';
import { Pancasila5Metadata } from './Pancasila5';
import { Inggris5Metadata } from './Inggris5';
import { Indonesia6Metadata } from './Indonesia6';
import { Pancasila6Metadata } from './Pancasila6';
import { Inggris6Metadata } from './Inggris6';

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
  Indonesia4Metadata as CardDataItem,
  Pancasila4Metadata as CardDataItem,
  Inggris4Metadata as CardDataItem,
  Indonesia5Metadata as CardDataItem,
  Pancasila5Metadata as CardDataItem,
  Inggris5Metadata as CardDataItem,
  Indonesia6Metadata as CardDataItem,
  Pancasila6Metadata as CardDataItem,
  Inggris6Metadata as CardDataItem,
];