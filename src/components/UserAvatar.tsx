import { useAuth } from '@/app/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserAvatar = () => {
  const { currentUser } = useAuth();

  const photoURL = currentUser?.photoURL ? currentUser.photoURL : undefined;

  return (
    <Avatar>
      <AvatarImage src={photoURL} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
