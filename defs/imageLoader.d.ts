declare class imageLoader {
  static displayBackground();
  static spriteMake(x: number, y: number, spriteName: string): Phaser.Sprite;
  static sprite(x: number, y: number, spriteName: string): Phaser.Sprite;
  static registerBackgroundImage(imageUrl: string, imageWidth: number, imageHeight: number);
  static preloadBackground();
  static hasFrameName(frameName: string): boolean;
}
