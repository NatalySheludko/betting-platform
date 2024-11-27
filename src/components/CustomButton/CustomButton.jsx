import { OrangeCustomButton, GreenCustomButton } from './CustomButton.styled';

export default function CustomButton({
  children,
  size,
  onClick,
  className,
  type = 'button',
  variant = 'default',
}) {
  const ButtonComponent =
    variant === 'another' ? GreenCustomButton : OrangeCustomButton;

  return (
    <ButtonComponent
      size={size}
      onClick={onClick}
      className={className}
      type={type}
    >
      {children}
    </ButtonComponent>
  );
}
