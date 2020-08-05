import keySpacePress from './../../audio/topre/press/SPACE.mp3';
import keySpaceRelease from './../../audio/topre/release/SPACE.mp3';
import keyEnterPress from './../../audio/topre/press/ENTER.mp3';
import keyEnterRelease from './../../audio/topre/release/ENTER.mp3';
import keyBackspacePress from './../../audio/topre/press/BACKSPACE.mp3';
import keyBackspaceRelease from './../../audio/topre/release/BACKSPACE.mp3';
import keyGenericPressR0 from './../../audio/topre/press/GENERIC_R0.mp3';
import keyGenericPressR1 from './../../audio/topre/press/GENERIC_R1.mp3';
import keyGenericPressR2 from './../../audio/topre/press/GENERIC_R2.mp3';
import keyGenericPressR3 from './../../audio/topre/press/GENERIC_R3.mp3';
import keyGenericPressR4 from './../../audio/topre/press/GENERIC_R4.mp3';
import keyGenericRelease from './../../audio/topre/release/GENERIC.mp3';

export const topre = {
  press: {
    SPACE: keySpacePress,
    ENTER: keyEnterPress,
    BACKSPACE: keyBackspacePress,
    GENERICR0: keyGenericPressR0,
    GENERICR1: keyGenericPressR1,
    GENERICR2: keyGenericPressR2,
    GENERICR3: keyGenericPressR3,
    GENERICR4: keyGenericPressR4,
  },
  release: {
    SPACE: keySpaceRelease,
    ENTER: keyEnterRelease,
    BACKSPACE: keyBackspaceRelease,
    GENERIC: keyGenericRelease,
  },
}