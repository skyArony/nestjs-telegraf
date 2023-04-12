import { MiddlewareFactory } from '../decorators';

export interface ComposerMetadata {
  handlers?: Array<MiddlewareFactory>;
}
