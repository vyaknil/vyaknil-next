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
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <VFlex as={"form"} direction={"column"} justify={"center"} gap={10} action={formAction}>
        <h1 style={{...getFont(font.heading1)}}>Вход для админа</h1>

        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Пароль" required />

        {errorMessage && (
          <p style={{ color: color.error, ...getFont(font.body6) }}>{errorMessage}</p>
        )}

        <VButton as={"button"} disabled={isPending} type="submit">{isPending ? "Вход..." : "Войти"}</VButton>
      </VFlex>
    </div>
  );
}