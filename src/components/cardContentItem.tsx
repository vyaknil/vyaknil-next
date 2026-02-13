"use client"

import { contentTableDelete, contentTableUpdate } from '@/database/methods'
import { AllowedTables, Content, ContentStatus } from '@/database/types'
import { color, Color, font, getFont, getRem, Styled, VButton, VFlex, VLink, VStyle } from '@/vyakui-react'
import { Icon } from '@iconify/react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'


const cardContentStatusColor: Record<ContentStatus, Color> = {
  "in-progress": "warning",
  planned:       "info",
  completed:     "success",
  dropped:       "error"
} as const satisfies Record<ContentStatus, Color>;

function formatDate(dateInput: string | Date | undefined): string | undefined {
  if (!dateInput) return undefined;

  const d = new Date(dateInput);

  const year = d.getFullYear();

  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

interface CardContentItemProps extends Content {
  tableName: AllowedTables;
}

export const CardContentItem = ({
  id,
  name,
  status,
  link,
  date_start,
  date_end,
  tableName,
}: CardContentItemProps) => {

  const {data: session} = useSession();
  const isAdmin: boolean = (session?.user as any)?.role === "admin";

  const [isEditOpen, setEditOpen] = useState(false);

  const [formData, setFormData] = useState({
    name, status, link, date_start, date_end
  });

  const handleDelete = async () => {
    if (confirm(`Delete ${name}?`)) {
      await contentTableDelete(tableName, id);
      window.location.reload();
    }
  }

  const handleUpdate = async () => {
    try {
      await contentTableUpdate(tableName, id, {
        ...formData,
        link: formData.link || null,
        date_start: formData.date_start || null,
        date_end: formData.date_end || null,
      } as any);
      setEditOpen(false);
      window.location.reload();
    } catch (e) {
      alert("Error updating record");
    }
  }

  const inputStyle: VStyle = {
    ...getFont(font.body6),
    backgroundColor: color.gray4,
    color: color.gray1,
    border: `1px solid ${color.gray3}`,
    padding: getRem(4),
    borderRadius: '6px',
    width: '100%'
  };

  const cardContentItemStyle: VStyle = {
    outline:                  `1px solid ${color.gray4}`,
    outlineOffset:            "-1px",
    backgroundColor:          color.gray5,
    width:                    "100%"
  }

  let itemName;
  if (link !== null) {
    itemName = <VLink
      as={Link}
      href={link}
      colorText={["gray1", "accent3"]}
      vStyle={{width: "100%", ...getFont(font.heading6)}}
      target={"_blank"}
    >
      {name}
    </VLink>;
  } else {
    itemName = <Styled
      as={"span"}
      vStyle={{width: "100%", ...getFont(font.heading6)}}
    >
      {name}
    </Styled>;
  }

  return (<>
    <VFlex
      direction={"column"}
      gap={16}
      padding={[16]}
      radius={[12]}
      vStyle={cardContentItemStyle}
    >
      {itemName}
      <VFlex text={"body5"} justify={"space-between"} vStyle={{width: "100%", height: getRem(44)}}>
        <VFlex
          padding={[8]}
          radius={[8]}
          align={"center"}
          vStyle={{
            backgroundColor: color[cardContentStatusColor[status]],
            height:          getRem(44)
          }}
        >{status}</VFlex>
        <VFlex direction={"column"} gap={4}>
          <span>{date_start !== null? formatDate(date_start) : "not started"}</span>
          <span>{date_end !== null? formatDate(date_end) : "not ended"}</span>
        </VFlex>
      </VFlex>
      {isAdmin &&
       <VFlex gap={16}>
         <VButton
           onClick={() => setEditOpen(true)}
           colorText={["gray1", "info"]}
           variant={"outline"}>
           <Icon icon={"mdi:pencil"} className={"icon"}/>
         </VButton>
         <VButton
           onClick={() => {
             handleDelete();
           }}
           colorText={["gray1", "error"]}
           variant={"outline"}>
           <Icon icon={"mdi:bin"} className={"icon"}/>
         </VButton>
       </VFlex>
      }
    </VFlex>
    {isEditOpen && (
      <Styled
        as="div"
        vStyle={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: getRem(20)
        }}
        onClick={() => setEditOpen(false)}
      >
        <VFlex
          direction="column"
          gap={20}
          padding={[24]}
          radius={[16]}
          onClick={(e) => e.stopPropagation()}
          vStyle={{
            backgroundColor: color.gray5,
            width: '100%',
            maxWidth: getRem(500),
            border: `1px solid ${color.gray3}`
          }}
        >
          <h2 style={{ ...getFont(font.heading5), color: color.gray1 }}>Edit Content</h2>

          <VFlex vStyle={{width: "100%"}} direction="column" gap={12}>
            <label style={{ ...getFont(font.body4), color: color.gray2 }}>Name</label>
            <input
              style={inputStyle}
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />

            <label style={{ ...getFont(font.body4), color: color.gray2 }}>Status</label>
            <select
              style={inputStyle}
              value={formData.status}
              onChange={e => setFormData({...formData, status: e.target.value as ContentStatus})}
            >
              <option value="planned">Planned</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="dropped">Dropped</option>
            </select>

            <label style={{ ...getFont(font.body4), color: color.gray2 }}>Link</label>
            <Styled as={"input"}
              vStyle={inputStyle}
              value={formData.link || ''}
              onChange={e => setFormData({...formData, link: e.target.value})}
            />

            <VFlex vStyle={{width: "100%"}} gap={12}>
              <VFlex direction="column" gap={4} vStyle={{ flex: 1 }}>
                <label style={{ ...getFont(font.body4), color: color.gray2 }}>Start Date</label>
                <Styled as={"input"}
                  type="date"
                  vStyle={inputStyle}
                  value={formData.date_start ? formatDate(formData.date_start) : ''}
                  onChange={e => setFormData({...formData, date_start: e.target.value as any})}
                />
              </VFlex>
              <VFlex direction="column" gap={4} vStyle={{ flex: 1 }}>
                <label style={{ ...getFont(font.body4), color: color.gray2 }}>End Date</label>
                <Styled as={"input"}
                  type="date"
                  vStyle={inputStyle}
                  value={formData.date_end ? formatDate(formData.date_end) : ''}
                  onChange={e => setFormData({...formData, date_end: e.target.value as any})}
                />
              </VFlex>
            </VFlex>
          </VFlex>

          <VFlex gap={12} justify="flex-end" vStyle={{ marginTop: getRem(10) }}>
            <VButton colorText={["gray1", "gray2"]} variant="outline" onClick={() => setEditOpen(false)}>Cancel</VButton>
            <VButton colorBg={["accent1", "accent2"]} onClick={handleUpdate}>Save Changes</VButton>
          </VFlex>
        </VFlex>
      </Styled>
    )}
  </>);
}