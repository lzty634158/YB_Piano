
/*
Copyright (C): 2010-2019, Shenzhen Yahboom Tech
modified from liusen
load dependency
"YB_Piano": "file:../pxt-YB_Piano"
*/

//% color="#17ecc1" weight=20 icon="\uf001"
namespace YB_Piano {

  
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
        //% blockId="C" block="C"
        C = 4,
        //% blockId="CD" block="CD"
        CD = 8,
        //% blockId="D" block="D"
        D = 16,
        //% blockId="DE" block="DE"
        DE = 32,
        //% blockId="E" block="E"
        E = 64,
        //% blockId="F" block="F"
        F = 128,
        //% blockId="FG" block="FG"
        FG = 256,
        //% blockId="G" block="G"
        G = 512,
        //% blockId="GA" block="GA"
        GA = 1024,
        //% blockId="A" block="A"
        A = 2048,
        //% blockId="AB" block="AB"
        AB = 4096,
        //% blockId="B" block="B"
        B = 8192, 
        //% blockId="L" block="L"
        L = 2,
        //% blockId="M" block="M"
        M = 1,
        //% blockId="H" block="H"
        H = 16384,
       
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
    
    //% blockId=YB_Piano_RGB_Program block="RGB_Program"
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
       
    //% blockId=YB_Piano_RGB_Program_Close block="RGB_Program_Close"
    //% weight=98
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
    export function RGB_Program_Close(): void {
        pins.digitalWritePin(DigitalPin.P1, 0);
        YB_Piano.RGB_Program().clear();
        YB_Piano.RGB_Program().show();
    }
    
    //% blockId=YB_Piano_Music_Handle block="Music_Handle|%index"
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
    
    //% blockId=YB_Piano_Touch block="Music Touch return"
    //% weight=97
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Touch(): number {
        let a = 0;
        let b = 0;
        let c = 0;
        pins.i2cWriteNumber(80,8,NumberFormat.UInt8BE,false);
        a = pins.i2cReadNumber(80, NumberFormat.UInt8BE, true);
        b = pins.i2cReadNumber(80, NumberFormat.UInt8BE, false);
        c = (b<<8)|a;
        return c;
    }
    
    //% blockId=YB_Piano_TouchButton block="Music Button|%value"
    //% weight=96
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function TouchButton(value: touch): number {
       
        let c = value;
        return c;
    }
    
    //% blockId=YB_Piano_TouchSensitivity block="TouchSensitivity|%key %value"
    //% weight=95
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function TouchSensitivity(key: number, value: number): void {

        i2cwrite(80, 181 + key, 128 + value);
        //pins.i2cWriteNumber(80, 181 + key, NumberFormat.UInt8BE, true);
        //pins.i2cWriteNumber(80, 128+value, NumberFormat.UInt8BE, false);
    }

    //% blockId=YB_Piano_TouchSensitivityValue block="TouchSensitivityValue|%key"
    //% weight=94
    //% blockGap=10
    //% color="#17ecc1"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function TouchSensitivityValue(key: number): number {

        pins.i2cWriteNumber(80, key + 181, NumberFormat.UInt8BE,false);
        let a = pins.i2cReadNumber(80, NumberFormat.UInt8BE, false);
        return a;
    }
}
