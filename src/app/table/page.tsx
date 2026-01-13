"use client";

import { Flex, Icon, InputText, LinkA } from "@/components/ui";
import { useState, useEffect } from "react";
import { content, TableName } from "./content";

interface TableItem {
    id: number;
    link: string;
    name: string;
    status: string;
    statusColor: "error" | "info" | "warning" | "success";
}

export default function Page() {
  const [currentTable, setCurrentTable] = useState<TableName>("contentGames");
  const [tableData, setTableData] = useState<TableItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const ITEMS_PER_PAGE = 15;

  useEffect(() => {
    setLoading(true);
    setError(null);
    setCurrentPage(1);
    
    content.get(currentTable)
      .then(data => {
        setTableData(data || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [currentTable]);

  const filteredData = tableData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const HeaderRow = (
    <Flex gap={1} vyakStyle={{ width: "100%" }} className="body3 color-gray5">
      <Flex padding={[6, 4]} vyakStyle={{ flex: "1 1 100%" }} className="bg-gray1" radius={[8, 0, 0, 0]}>
        Name
      </Flex>
      <Flex
        justify="center"
        align="center"
        vyakStyle={{ flex: "0 0 150px", alignSelf: "stretch" }}
        className="bg-gray1"
        radius={[0, 8, 0, 0]}
      >
        Status
      </Flex>
    </Flex>
  );

  const TableLabel = (
    <Flex align="flex-end" gap={32} wrap="wrap" width="100%">
      <h1 className="heading1">Table</h1>
      <Flex gap={20} wrap="wrap">
        <LinkA
          className="body3"
          colors={["accent3", "accent3"]}
          onClick={() => setCurrentTable("contentGames")}
        >
          Games
        </LinkA>
      </Flex>
    </Flex>
  );

  const SearchBar = (
    <Flex direction="column" gap={16} width="100%">
      <InputText
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="body4 color-gray5"
        style={{ width: "100%" }}
      >Search by name...</InputText>
    </Flex>
  );

  const PaginationControls = (
    <Flex align="center" justify="center" gap={8} width="100%">
      <LinkA
        onClick={() => handlePageChange(currentPage - 1)}
        className="body4"
        disabled={currentPage === 1}
      >
        &lt;
      </LinkA>
      
      <Flex align="center" className="body4 color-gray1">
        {currentPage}/{totalPages || 1}
      </Flex>
      
      <LinkA
        onClick={() => handlePageChange(currentPage + 1)}
        className="body4"
        disabled={currentPage === totalPages || totalPages === 0}
      >
        &gt;
      </LinkA>
    </Flex>
  );

  if (error) {
    return (
      <Flex as="section" direction="column" gap={32} padding={[32]}>
        <p className="body1 color-error">Error loading data: {error.message}</p>
        <LinkA onClick={() => window.location.reload()} className="body4">
          Try again
        </LinkA>
      </Flex>
    );
  }

  return (
    <Flex as="section" direction="column" gap={32} padding={[0, 32, 32]}>
      {TableLabel}
      
      {SearchBar}
      
      <Flex direction="column" vyakStyle={{ width: "100%" }} gap={1}>
        {HeaderRow}
        
        {loading ? (
          <Flex padding={[16]} justify="center" className="body1 color-gray5">
            Loading data...
          </Flex>
        ) : paginatedData.length > 0 ? (
          paginatedData.map((item, index) => (
            <Flex
              gap={1}
              key={item.id}
              vyakStyle={{ width: "100%" }}
              className="body4 color-gray5"
            >
              <Flex
                padding={[4]}
                vyakStyle={{ flex: "1 1 100%" }}
                className={`bg-gray${index % 2 + 2}`}
              >
                <LinkA href={item.link} disabled={item.link == ""} colors={["gray5", "gray4"]}>
                <Flex gap={8}>
                  {item.name}{item.link == ""? "" : <Icon name="material-symbols--open-in-new-rounded"/>}
                </Flex>
                </LinkA>
              </Flex>
              <Flex
                justify="center"
                align="center"
                vyakStyle={{ flex: "0 0 150px", alignSelf: "stretch" }}
                className={`bg-${item.statusColor}`}
              >
                {item.status}
              </Flex>
            </Flex>
          ))
        ) : (
          <Flex padding={[16]} justify="center" className="body1 color-gray1">
            {filteredData.length === 0 && searchTerm
              ? "No results found"
              : "No data available"}
          </Flex>
        )}
      </Flex>
      
      {totalPages > 1 && PaginationControls}
    </Flex>
  );
}