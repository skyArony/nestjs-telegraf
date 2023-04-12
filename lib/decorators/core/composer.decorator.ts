import { SetMetadata } from '@nestjs/common';
import { MiddlewareFn } from 'telegraf';
import { COMPOSER_METADATA } from '../../telegraf.constants';

export type MiddlewareFactory = (...args: any[]) => MiddlewareFn<any>;

export const Composer = (handlers?: Array<MiddlewareFactory>): ClassDecorator =>
  SetMetadata(COMPOSER_METADATA, { handlers });
