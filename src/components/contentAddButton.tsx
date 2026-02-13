"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { contentTablePut } from '@/database/methods'
import { AllowedTables, ContentStatus } from '@/database/types'
import { color, font, getFont, getRem, Styled, VButton, VFlex, VStyle } from '@/vyakui-react'
import { Icon } from '@iconify/react'

export const ContentAddButton = ({ tableName }: { tableName: AllowedTables }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    status: 'planned' as ContentStatus,
    link: '',
    date_start: null,
    date_end: null
  });

  const handleCreate = async () => {
    if (!formData.name) return alert("Name is required");
    setIsSaving(true);
    try {
      await contentTablePut(tableName, formData.name);
      setIsOpen(false);
      setFormData({ name: '', status: 'planned', link: '', date_start: null, date_end: null });
      router.refresh();
    } catch (e) {
      alert("Error creating record");
    } finally {
      setIsSaving(false);
    }
  };

  const inputStyle: VStyle = {
    ...getFont(font.body6),
    backgroundColor: color.gray4,
    color: color.gray1,
    border: `1px solid ${color.gray3}`,
    padding: getRem(8),
    borderRadius: '6px',
    width: '100%'
  };

  return (
    <>
      <VButton
        onClick={() => setIsOpen(true)}
        variant="outline"
        colorText={["gray1", "accent1"]}
        size={"sm"}
        vStyle={{width: '100%'}}
      >
        <VFlex align="center" gap={8}>
          <Icon icon="mdi:plus" /> Add New Item
        </VFlex>
      </VButton>

      {isOpen && (
        <Styled
          as="div"
          vStyle={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 2000, padding: getRem(20)
          }}
          onClick={() => setIsOpen(false)}
        >
          <VFlex
            direction="column" gap={20} padding={[24]} radius={[16]}
            onClick={(e) => e.stopPropagation()}
            vStyle={{ backgroundColor: color.gray5, width: '100%', maxWidth: getRem(500), border: `1px solid ${color.gray3}` }}
          >
            <h2 style={{ ...getFont(font.heading5), color: color.gray1 }}>Add New Content</h2>

            <VFlex direction="column" gap={12}>
              <label style={{ ...getFont(font.body4), color: color.gray2 }}>Name *</label>
              <Styled as="input" style={inputStyle} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />

            </VFlex>

            <VFlex gap={12} justify="flex-end">
              <VButton colorText={["gray1", "gray2"]} variant="outline" onClick={() => setIsOpen(false)}>Cancel</VButton>
              <VButton disabled={isSaving} colorBg={["accent1", "accent2"]} onClick={handleCreate}>
                {isSaving ? "Creating..." : "Create"}
              </VButton>
            </VFlex>
          </VFlex>
        </Styled>
      )}
    </>
  );
};