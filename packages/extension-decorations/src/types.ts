import { DecorationSet } from 'prosemirror-view'

import { DecoratorCharacter } from './plugin/DecoratorCharacter'
import { DecoratorNode } from './plugin/DecoratorNode'

export interface DecorationsOptions {
  builders: Array<DecoratorCharacter | DecoratorNode>
}

export interface Position {
  pos: number;
  text: string;
}

export interface PluginState {
  isActive: boolean
  decorations: DecorationSet
}
