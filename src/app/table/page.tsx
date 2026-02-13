import { CardContentItem, ContentAddButton, TableFilters } from '@/components'
import { contentTableSelect } from '@/database/methods'
import { VFlex, VMasonry } from '@/vyakui-react'
import { auth } from "@/lib/auth"

interface PageProps {
  searchParams: Promise<{
    query?: string;
    status?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { query, status } = await searchParams;

  let games = await contentTableSelect("content_games");

  if (query) {
    games = games.filter(game =>
      game.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (status && status !== 'all') {
    games = games.filter(game => game.status === status);
  }

  const session = await auth();
  const isAdmin = session?.user?.role === "admin";

  const tableItems = games.map(i => (
    <CardContentItem
      key={i.id}
      id={i.id}
      name={i.name}
      status={i.status}
      link={i.link}
      date_end={i.date_end}
      date_start={i.date_start}
      tableName={"content_games"}
    />
  ));

  return (
    <VFlex as={"section"} direction={"column"} gap={32}>

      <VFlex gap={20} wrap="wrap" vStyle={{width: "100%"}}>
        <TableFilters />
        {isAdmin && (
          <ContentAddButton tableName="content_games"/>
        )}
      </VFlex>

      {tableItems.length > 0 ? (
        <VMasonry
          columns={{
            default: 1,
            sm:      2,
            lg:      3
          }}
          gap={20}
        >
          {tableItems}
        </VMasonry>
      ) : (
        <VFlex justify="center" padding={[40]}>
          <span style={{ color: 'gray' }}>No games found matching filters.</span>
        </VFlex>
      )}
    </VFlex>
  );
}