chrome.tabs.query({ currentWindow: true }, (tabs) => {
    const tabCount = tabs.length;
    const header = document.getElementById("tab-count");
    header.textContent = `Abas Abertas: ${tabCount}`;
  
    chrome.tabGroups.query({}, (groups) => {
      const groupMap = {};
      groups.forEach(group => {
        groupMap[group.id] = {
          title: group.title || "Sem Título",
          color: group.color
        };
      });
  
      document.getElementById("export-txt").addEventListener("click", () => {
        let fileContent = "\uFEFF";
        fileContent += "Abas Abertas:\n\n";
        tabs.forEach((tab, index) => {
          const groupInfo = tab.groupId !== -1 ? ` (Grupo: ${groupMap[tab.groupId]?.title})` : "";
          fileContent += `#${index + 1}\nTítulo: ${tab.title || "Sem Título"}\nURL: ${tab.url}\n${groupInfo}\n\n`;
        });
  
        const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "abas_abertas.txt";
        a.click();
        URL.revokeObjectURL(url);
      });
  
      document.getElementById("export-json").addEventListener("click", () => {
        const tabData = tabs.map(tab => ({
          id: tab.id,
          index: tab.index,
          windowId: tab.windowId,
          openerTabId: tab.openerTabId,
          highlighted: tab.highlighted,
          active: tab.active,
          pinned: tab.pinned,
          discarded: tab.discarded,
          autoDiscardable: tab.autoDiscardable,
          url: tab.url,
          title: tab.title,
          status: tab.status,
          favIconUrl: tab.favIconUrl,
          audible: tab.audible,
          mutedInfo: tab.mutedInfo,
          incognito: tab.incognito,
          width: tab.width,
          height: tab.height,
          sessionId: tab.sessionId,
          groupId: tab.groupId,
          groupInfo: tab.groupId !== -1 ? groupMap[tab.groupId] : null
        }));
  
        const blob = new Blob([JSON.stringify(tabData, null, 2)], { type: "application/json;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "abas_abertas.json";
        a.click();
        URL.revokeObjectURL(url);
      });
    });
  });
  