import Image from 'next/image';

type PanelProps = {
  chatType: string;
};

const Panel = ({ chatType }: PanelProps) => {
  const getChatConfig = () => {
    let imageUrl = '';
    let message = '';

    switch (chatType) {
      case 'conversation':
        imageUrl = '/conversation_panel.svg';
        message = '会話を始めよう';
        break;

      case 'image_generation':
        imageUrl = '/image_generation_panel.svg';
        message = '画像を生成しよう';
        break;

      case 'text_to_speech':
        imageUrl = '/text_to_speech_panel.svg';
        message = 'テキストを音声に変換しよう';
        break;

      case 'speech_to_text':
        imageUrl = '/speech_to_text_panel.svg';
        message = '音声をテキストに変換しよう';
        break;

      case 'image_analysis':
        imageUrl = '/image_analysis_panel.svg';
        message = '画像を解析しよう';
        break;
    }

    return { imageUrl, message };
  };

  const { imageUrl, message } = getChatConfig();

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative size-72">
        <Image alt="panel image" src={imageUrl} priority></Image>
      </div>
      <p className="text-center text-sm text-muted-foreground">{message}</p>
    </div>
  );
};

export default Panel;
