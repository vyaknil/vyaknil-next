"use client"
import { color, font, getFont, VButton, VFlex } from '@/vyakui-react';
import { useActionState } from 'react';
import { authenticate } from "./actions";

export default function LoginPage() {

  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <VFlex as={"section"}>
      <VFlex as={"form"} direction={"column"} align={"center"} gap={10} action={formAction} vStyle={{width: "100%"}}>
        <h1 style={{...getFont(font.heading1)}}>Вход для админа</h1>

        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Пароль" required />

        {errorMessage && (
          <p style={{ color: color.error, ...getFont(font.body6) }}>{errorMessage}</p>
        )}

        <VButton as={"button"} disabled={isPending} type="submit">{isPending ? "Вход..." : "Войти"}</VButton>
      </VFlex>
    </VFlex>
  );
}