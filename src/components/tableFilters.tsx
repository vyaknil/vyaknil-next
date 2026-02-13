"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { color, font, getFont, getRem, VFlex, Styled } from '@/vyakui-react'

export const TableFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleStatusChange = (status: string) => {
    const params = new URLSearchParams(searchParams);
    if (status && status !== 'all') {
      params.set('status', status);
    } else {
      params.delete('status');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const inputStyle = {
    ...getFont(font.body6),
    backgroundColor: color.gray5,
    color: color.gray1,
    border: `1px solid ${color.gray4}`,
    padding: getRem(10),
    borderRadius: '8px',
    outline: 'none',
    width: '100%',
  };

  return (
    <VFlex gap={16} wrap="wrap" vStyle={{ width: '100%' }}>
      <VFlex direction="column" gap={6} vStyle={{ flex: '2 1 300px' }}>
        <Styled as="input"
                placeholder="Search by name..."
                style={inputStyle}
                defaultValue={searchParams.get('query')?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
        />
      </VFlex>

      <VFlex direction="column" gap={6} vStyle={{ flex: '1 1 200px' }}>
        <Styled as="select"
                style={inputStyle}
                defaultValue={searchParams.get('status')?.toString() || 'all'}
                onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="planned">Planned</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="dropped">Dropped</option>
        </Styled>
      </VFlex>
    </VFlex>
  );
};