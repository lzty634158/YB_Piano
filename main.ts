
/*
Copyright (C): 2010-2019, Shenzhen Yahboom Tech
modified from liusen
load dependency
"piano": "file:../pxt-piano"  
*/

//% color="#17ecc1" weight=20 icon="\uf001"
namespace piano {

  
    let yahStrip: neopixel.Strip;
    
    
    export enum enMusic {

        dadadum = 0,
        entertainer,
        prelude,
        ode,
        nyan,
        ringtone,
        funk,
        blues,

        birthday,
        wedding,
        funereal,
        punchline,
        baddy,
        chase,
        ba_ding,
        wawawawaa,
        jump_up,
        jump_down,
        power_up,
        power_down
    }

    export enum touch {
        //% blockId="None" block="None"
        None = 0x0000,
        //% blockId="C" block="C"
        C = 0x0004,
        //% blockId="CD" block="CD"
        CD = 0x0008,
        //% blockId="D" block="D"
        D = 0x0010,
        //% blockId="DE" block="DE"
        DE = 0x0020,
        //% blockId="E" block="E"
        E = 0x0040,
        //% blockId="F" block="F"
        F = 0x0080,
        //% blockId="FG" block="FG"
        FG = 0x0100,
        //% blockId="G" block="G"
        G = 0x0200,
        //% blockId="GA" block="GA"
        GA = 0x0400,
        //% blockId="A" block="A"
        A = 0x0800,
        //% blockId="AB" block="AB"
        AB = 0x1000,
        //% blockId="B" block="B"
        B = 0x2000, 
        //% blockId="L" block="L"
        L = 0x0002,
        //% blockId="M" block="M"
        M = 0x0001,
        //% blockId="H" block="H"
        H = 0x4000,
       
    }
    
    export enum enColor {
        //% blockId="OFF" block="OFF"
        OFF = 0,
        //% blockId="RED" block="RED"
        RED,
        //% blockId="GREEN" block="GREEN"
        GREEN,
        //% blockId="BLUE" block="BLUE"
        BLUE,
        //% blockId="WHITE" block="WHITE"
        WHITE,
        //% blockId="CYAN" block="CYAN"
        CYAN,
        //% blockId="PINKISH" block="PINKISH"
        PINKISH,
        //% blockId="YELLOW" block="YELLOW"
        YELLOW
    }
    

    function i2cwrite(addr: number, reg: number, value: number) { 
        let buf = pins.createBuffer(2); 
        buf[0] = reg; 
        buf[1] = value; 
        pins.i2cWriteBuffer(addr, buf); 
    }  
         
        
   
    /**
     * *****************************************************************
     * @param index
     */
    
    //% blockId=piano_RGB_Program block="RGB_Program"
    //% weight=99
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function RGB_Program(): neopixel.Strip {
         
        if (!yahStrip) {
            yahStrip = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB);
        }
        return yahStrip;  
    }  
       
    //% blockId=piano_RGB_Program_Close block="RGB_Program_Close"
    //% weight=98
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function RGB_Program_Close(): void {
        pins.digitalWritePin(DigitalPin.P1, 0);
        piano.RGB_Program().clear();
        piano.RGB_Program().show();
    }
    
    //% blockId=piano_Music_Handle block="Music_Handle|%index"
    //% weight=98
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Music_Handle(index: enMusic): void {
        switch (index) {
            case enMusic.dadadum: music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once); break;
            case enMusic.birthday: music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once); break;
            case enMusic.entertainer: music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once); break;
            case enMusic.prelude: music.beginMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once); break;
            case enMusic.ode: music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once); break;
            case enMusic.nyan: music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once); break;
            case enMusic.ringtone: music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once); break;
            case enMusic.funk: music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once); break;
            case enMusic.blues: music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once); break;
            case enMusic.wedding: music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once); break;
            case enMusic.funereal: music.beginMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once); break;
            case enMusic.punchline: music.beginMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once); break;
            case enMusic.baddy: music.beginMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once); break;
            case enMusic.chase: music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once); break;
            case enMusic.ba_ding: music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once); break;
            case enMusic.wawawawaa: music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once); break;
            case enMusic.jump_up: music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once); break;
            case enMusic.jump_down: music.beginMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once); break;
            case enMusic.power_up: music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once); break;
            case enMusic.power_down: music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once); break;
        }
    }
    
    //% blockId=piano_Touch block="Music Touch return"
    //% weight=97
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Touch(): number {
        let a = 0;
        let b = 0;
        let c = 0;
        pins.i2cWriteNumber(0x50,8,NumberFormat.UInt8BE,false);
        a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        c = (b<<8)|a;
        return c;
    }
    
    //% blockId=piano_TouchButton block="Music Button|%value"
    //% weight=96
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function TouchButton(value: touch): number {
       
        let c = value;
        return c;
    }

    //% blockId=piano_PlayPiano block="Play Piano|tone %value"
    //% weight=95
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function PlayPiano(value: number): void {
        let a = 0;
        let b = 0;
        let c = 0;
        let temp = 0;
        pins.i2cWriteNumber(0x50, 8, NumberFormat.UInt8BE,false);
        a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        c = (b << 8) | a;
        
        if (value == 1) { 
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & touch.C) {
                music.ringTone(131);
            } else if (c & touch.CD) {
                music.ringTone(139);
            } else if (c & touch.D) {
                music.ringTone(147);
            } else if (c & touch.DE) {
                music.ringTone(156);
            } else if (c & touch.E) {
                music.ringTone(165);
            } else if (c & touch.F) {
                music.ringTone(175);
            } else if (c & touch.FG) {
                music.ringTone(185);
            } else if (c & touch.G) {
                music.ringTone(196);
            } else if (c & touch.GA) {
                music.ringTone(208);
            } else if (c & touch.A) {
                music.ringTone(220);
            } else if (c & touch.AB) {
                music.ringTone(233);
            } else if (c & touch.B) {
                music.ringTone(247);
            } else if (c == touch.None) {
                music.ringTone(0);
                //pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
        else  if (value == 2) { 
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & touch.C) {
                music.ringTone(262);
            } else if (c & touch.CD) {
                music.ringTone(277);
            } else if (c & touch.D) {
                music.ringTone(294);
            } else if (c & touch.DE) {
                music.ringTone(311);
            } else if (c & touch.E) {
                music.ringTone(330);
            } else if (c & touch.F) {
                music.ringTone(349);
            } else if (c & touch.FG) {
                music.ringTone(370);
            } else if (c & touch.G) {
                music.ringTone(392);
            } else if (c & touch.GA) {
                music.ringTone(415);
            } else if (c & touch.A) {
                music.ringTone(440);
            } else if (c & touch.AB) {
                music.ringTone(466);
            } else if (c & touch.B) {
                music.ringTone(494);
            } else if (c == touch.None) {
                music.ringTone(0);
                //pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
        else  if (value == 3) { 
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & touch.C) {
                music.ringTone(523);
            } else if (c & touch.CD) {
                music.ringTone(554);
            } else if (c & touch.D) {
                music.ringTone(587);
            } else if (c & touch.DE) {
                music.ringTone(622);
            } else if (c & touch.E) {
                music.ringTone(659);
            } else if (c & touch.F) {
                music.ringTone(698);
            } else if (c & touch.FG) {
                music.ringTone(740);
            } else if (c & touch.G) {
                music.ringTone(784);
            } else if (c & touch.GA) {
                music.ringTone(831);
            } else if (c & touch.A) {
                music.ringTone(880);
            } else if (c & touch.AB) {
                music.ringTone(932);
            } else if (c & touch.B) {
                music.ringTone(988);
            } else if (c == touch.None) {
                music.ringTone(0);
                //pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
        
        

        
    }
    
    
}
