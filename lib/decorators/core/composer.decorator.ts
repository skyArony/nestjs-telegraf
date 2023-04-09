import { SetMetadata } from '@nestjs/common';
import { Middleware } from 'telegraf';
import { COMPOSER_METADATA } from '../../telegraf.constants';

export const Composer = (
  handlers?: ReadonlyArray<Middleware<any>>,
): ClassDecorator => SetMetadata(COMPOSER_METADATA, handlers);
