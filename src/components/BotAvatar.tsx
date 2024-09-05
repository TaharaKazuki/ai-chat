import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const BotAvatar = () => {
  return (
    <Avatar className="size-8">
      <AvatarImage src="/assets/ai_logo.svg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default BotAvatar;
